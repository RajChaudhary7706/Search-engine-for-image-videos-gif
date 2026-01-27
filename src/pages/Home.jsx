import Tabs from '../components/Tabs.jsx'
import SearchBar from '../components/SearchBar.jsx'
import ResultGrid from '../components/ResultGrid.jsx'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {

    const { query } = useSelector((state) => state.search)
  return (
    <div>

      <SearchBar />
        {query!=''?<div>
            <Tabs />
            <ResultGrid />
        </div> : ''}
    </div>
  )
}

export default Home
