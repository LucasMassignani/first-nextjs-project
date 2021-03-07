export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: '1'
      }
    },{
      params: {
        id: '2'
      }
    }],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  await new Promise(resolve=>setTimeout(resolve, 5000))
  const id = context.params.id

  return {
    props: {
      id
    }
  }
}

function Produtos(props) {
  return <div>Id do produto: {props.id}</div>
}

export default Produtos