import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MarkDown from 'markdown-to-jsx'
import Footer from '../components/Footer'
import { NoMatch } from '../App'

const exists = async (path: string) => {
  try {
    const response = await fetch(path, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking file existence:', error);
    return false;
  }
};

function BlogArticle() {
  
  //const listUsersResponse: any = await notion.users.list({})

  const { id } = useParams()

  const [content, setContent] = useState('')
  const filename = `./blog/${id}.md`
  const [error, setError] = useState(false)

  const checkIsFile = async () => {
    const existence = await exists(filename)
    setError(existence)
  }
  checkIsFile()

  useEffect(() => {
    import (filename)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setContent(res))
          .catch(err => console.log(err))

      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Navbar />
      <main className="w-[100vw] px-[15%] my-32 min-h-[30vh] lg:min-h-[50vh]">
        { error &&
          <NoMatch/>
        }
        <MarkDown>{content}</MarkDown>
      </main>
      <Footer/>
    </>
  )
}

export default BlogArticle
