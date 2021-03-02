import { useEffect } from 'react'
import * as S from './styles'

const CardsExpand = () => {
  useEffect(() => {
    const panels = document.querySelectorAll('.card')
    panels.forEach((panel) => {
      panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
      })
    })

    function removeActiveClass() {
      panels.forEach(panel => {
        panel.classList.remove('active')
      })
    }
  }, [])

  return (
    <S.Wrapper >
      <S.Card className="card active" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=733&q=80')" }}>
        <h3>Explore the World</h3>
      </S.Card>

      <S.Card className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523641919979-e2cc0a03b830?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbGQlMjBmbG9yZXN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')" }}>
        <h3>Wild Florest</h3>
      </S.Card>

      <S.Card className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587711530056-943b29f4dc77?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHN1bm55JTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')" }}>
        <h3>Sunny Beach</h3>
      </S.Card>

      <S.Card className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520210599173-ba8e9fc44395?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eSUyMG9uJTIwd2ludGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')" }}>
        <h3>City on Winter</h3>
      </S.Card>

      <S.Card className="card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577944142940-598ecda0f02b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')" }}>
        <h3>Mountains</h3>
      </S.Card>

    </S.Wrapper>
  )
}

export default CardsExpand
