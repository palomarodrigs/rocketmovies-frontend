import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { api } from './../../services/api'
import { useAuth } from '../../hooks/auth'

import { FiArrowLeft, FiClock, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function MoviePreview() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()

  const [avatarURL, setAvatarURL] = useState(
    user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  )

  async function handleRemoveMovie() {
    const confirm = window.confirm('Do you really want to remove the note?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)

      setData(response.data)
    }

    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <div>
            <Link to='/'>
              <FiArrowLeft size={20} />
              Return
            </Link>
            <ButtonText title='Delete' icon={FiTrash2} onClick={handleRemoveMovie} />
          </div>

          <div>
            <h1>{data.title}</h1>
            <Stars rating={data.rating} />
          </div>

          <div>
            <img src={avatarURL} alt={user.name} />
            By {user.name}
            <FiClock /> {data.updated_at}
          </div>

          {data.tags && (
            <div>
              {data.tags.map(tag => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </div>
          )}

          <p>{data.description}</p>
        </main>
      )}
    </Container>
  )
}
