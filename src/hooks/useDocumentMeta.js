import { useEffect } from 'react'

export default function useDocumentMeta(title, description) {
  useEffect(() => {
    if (!title) return undefined

    const previousTitle = document.title
    document.title = title

    const descriptionTag = document.querySelector('meta[name="description"]')
    const previousDescription = descriptionTag?.getAttribute('content')
    if (descriptionTag && description) {
      descriptionTag.setAttribute('content', description)
    }

    return () => {
      document.title = previousTitle
      if (descriptionTag && previousDescription) {
        descriptionTag.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}
