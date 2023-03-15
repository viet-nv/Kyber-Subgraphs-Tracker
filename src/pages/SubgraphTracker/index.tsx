/** @jsxImportSource @emotion/react */
import relativeTime from 'dayjs/plugin/relativeTime'
import styled from '@emotion/styled'
import { Button, Table } from 'antd'
import { theme } from 'theme'
import { useSearchParams } from 'react-router-dom'
import { config, TAB } from './config'
import { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)

const Wrapper = styled.div({
  background: theme.bg2,
  minWidth: '100vw',
  minHeight: '100vh',
  padding: '1.5rem',
})

const Container = styled.div({
  maxWidth: '1320px',
  margin: 'auto',
  padding: '1rem',
  width: '100%',
  borderRadius: '1.5rem',
  backgroundImage:
    'linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )',
})

const Header = styled.div({
  borderRadius: '999px',
  boxShadow: theme.boxShadow,
  padding: '0.5rem',
  display: 'flex',
  background: theme.bg2,
  alignItems: 'center',
})

function SubgraphTracker() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tab = Object.values(TAB).includes(searchParams.get('tab') as TAB)
    ? (searchParams.get('tab') as TAB)
    : TAB.Elastic

  return (
    <Wrapper>
      <Container>
        <Header>
          {Object.values(TAB).map((item) => (
            <Button
              key={item}
              onClick={() => {
                searchParams.set('tab', item)
                setSearchParams(searchParams)
              }}
              type={tab === item ? 'primary' : 'link'}
              css={{
                fontWeight: '500',
                borderRadius: '999px',
              }}
            >
              {item.slice(0, 1).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </Header>

        <Table
          css={{ marginTop: '1rem' }}
          dataSource={config[tab]}
          pagination={{ pageSize: 20 }}
          columns={[
            {
              title: '',
              dataIndex: 'network',
              render: (text) => <b>{text}</b>,
            },
            {
              title: 'Kyber',
              dataIndex: 'kyberLink',
              render: (value) =>
                !value ? 'Not supported' : <SingleCheck url={value} />,
            },
            {
              title: 'TheGraph',
              dataIndex: 'thegraphLink',
              render: (value) =>
                !value ? 'Not supported' : <SingleCheck url={value} />,
            },
          ]}
        />
      </Container>
    </Wrapper>
  )
}

const SingleCheck = ({ url }: { url: string }) => {
  const [data, setData] = useState({
    number: null,
    timestamp: null,
    hasIndexingErrors: false,
    deployment: '',
  })

  const check = useCallback(async () => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          _meta {
            hasIndexingErrors
            block {
              number
              timestamp
            }
            deployment
          }
        }`,
      }),
    }).then((res) => res.json())

    setData({
      ...res?.data?._meta?.block,
      hasIndexingErrors: res?.data?._meta.hasIndexingErrors,
      deployment: res?.data?._meta.deployment,
    })
  }, [url])

  useEffect(() => {
    check()
    const i = setInterval(() => {
      check()
    }, 10_000)
    return () => i && clearInterval(i)
  }, [check])

  return (
    <>
      <div css={{ display: 'flex', gap: '8px' }}>
        <div>
          Block: <b>{data.number}</b>
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          Query ↗
        </a>
      </div>
      <div>
        Time: <b>{data.timestamp}</b>{' '}
        {data.timestamp && <>({dayjs(data.timestamp * 1000).fromNow()})</>}
      </div>

      <div>ID: {data.deployment}</div>
      {data.hasIndexingErrors && (
        <div css={{ color: '#f81d22' }}>indexing_error</div>
      )}
    </>
  )
}

export default SubgraphTracker
