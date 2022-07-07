import React from 'react';
import './Homepage.css';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Row from '../../components/Row/Row';

function Homepage() {
  return (
    <div className='Homepagecont'>
   <Navbar pr={false} logout={true} show={true} />
       <Banner/>
     <div className='hello'>
     <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
        isLargeRow
      />
      <Row
        title="TOP OF THE CHART"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
      />
      <Row
        title="MOST VIEWED"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
      />
      <Row
        title="BEST OF 2022"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
      />
      <Row
        title="ORIGINALS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
      />
      </div>
      

    </div>
  )
}

export default Homepage