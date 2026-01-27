
import { useEffect } from 'react'
import ResultCard from './ResultCard.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGif } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } =
    useSelector((state) => state.search)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!query || query.trim() === '') {
      dispatch(setResults([]))
      return
    }
    
    const getData = async () => {
      dispatch(setLoading(true))
      dispatch(setError(null))

      try {
        let data = []

        if (activeTab === 'photos') {
          const response = await fetchPhotos(query)
          data = response.map(item => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description || 'Untitled',
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }))
        }

        else if (activeTab === 'videos') {
          const response = await fetchVideos(query)
          data = response.map(item => ({
            id: item.id,
            type: 'video',
            title: item.user?.name || 'Video',
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            url: item.url,
          }))
        }

        else if (activeTab === 'gifs') {
          const response = await fetchGif(query)
          data = response.map(item => ({
            id: item.id,
            type: 'gif',
            thumbnail: item.images?.fixed_height?.url || item.images?.original?.url,
            src: item.images?.original?.url,
            title: item.title || 'GIF',
            url: item.url,
          }))
        }

        dispatch(setResults(data))
      } catch (err) {
        dispatch(setError(err.message || 'Fetch failed'))
        dispatch(setResults([]))
      }
    }

    getData()
  }, [query, activeTab, dispatch])

  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading...</h1>

  return (
  <div className='flex justify-between flex-wrap px-5 py-5 gap-6 overflow-auto'>
    {results.map((item, idx) => {
        return <div key={idx}>
            
            <ResultCard item={item} />
        </div>
    })}
  </div>
)
}
export default ResultGrid
