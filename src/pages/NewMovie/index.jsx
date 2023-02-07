import { Container, Form } from './styles'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'

import { useState } from 'react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function NewMovie() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Enter note title')
    }

    if (!rating) {
      return alert('Enter the note')
    }

    if (rating < 0 || rating > 5) {
      return alert('The movie rating must be between 0 and 5')
    }

    if (newTag) {
      return alert('To create the note you must add the tag or leave the field empty.')
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags
    })

    alert('Note created successfully!')
    handleBack()
  }

  function handleClear() {
    setTitle('')
    setRating('')
    setDescription('')
    setTags([])

    document.querySelectorAll('input').forEach(input => (input.value = ''))

    document.querySelectorAll('textarea').forEach(textarea => (textarea.value = ''))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  return (
    <Container>
      <Header />
      <Form>
        <div>
          <ButtonText title='Back' icon={FiArrowLeft} onClick={handleBack} />
          <h1>New movie</h1>
        </div>

        <main>
          <div>
            <Input
              placeholder='Title'
              style={{ marginRight: 40 }}
              onChange={e => setTitle(e.target.value)}
            />
            <Input placeholder='Your note (from 0 to 5)' onChange={e => setRating(e.target.value)} />
          </div>

          <TextArea placeholder='Observation' onChange={e => setDescription(e.target.value)} />

          <Section title='Bookmarks'>
            <div className='tags'>
              {tags.map((tag, index) => (
                <NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
              ))}
              <NoteItem
                isNew
                placeholder='New tag'
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className='btns'>
            <Button title='Clear' onClick={handleClear} />
            <Button title='Save changes' onClick={handleNewNote} />
          </div>
        </main>
      </Form>
    </Container>
  )
}
