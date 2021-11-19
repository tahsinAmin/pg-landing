import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex h-auto'>
        <div className="sidebar fixed flex-none bg-blue-700 text-white h-screen p-2 flex flex-col justify-center">
            <label htmlFor=""><span className="ti-menu"></span></label>
        </div>
        <div className='flex-grow'>
          <div className="flex flex-col">
          <header className='main flex-none flex items-center justify-between my-2 w-11/12 mx-auto'>
            <div className="brand flex items-center">
              <div className="relative h-10 w-6 cursor-pointer my-auto"> 
                  <Image
                    src='/img/logo.jpg' 
                    layout='fill' 
                    objectFit='contain'
                    objectPosition='left'/>
              </div>
              <p>NBA</p>
            </div>
            <div className="nav-menu">
                <ul className='flex space-x-4 justify-between uppercase'>
                  <li><a href="">Scores</a></li>
                  <li><a href="">Schedule</a></li>
                  <li><a href="">News</a></li>
                  <li><a href="">Players</a></li>
                  <li><a href="">Teams</a></li>
                </ul>
            </div>
            <div className="user">
              <div className="relative h-10 w-10 cursor-pointer my-auto"> 
                <Image
                src='/img/2.jpg' 
                layout='fill' 
                objectFit='cover'
                className='rounded-full'
                /> 
              </div>
            </div>
          </header>
          <div className="flex-grow bg-gray-200">
            <div className="main-content w-11/12 mx-auto py-8">
              <div className="content-1 grid grid-cols-3 gap-3 ">
                <div className="side-content">
                  <div className="fav flex items-center space-x-2">
                    <div className="circle-bg flex justify-center items-center align-middle border-2 border-gray-200 bg-gray-300 rounded-full p-2">
                      <span className="ti-star"></span>
                    </div>
                    <span>Favourites</span>
                  </div>

                  <div className="character">
                    <h1 className='font-semibold text-5xl my-7 line leading-20'>Paul <br /> George</h1>
                  </div>
                  <div className="team flex items-center space-x-1">
                    <div className="relative h-10 w-10 cursor-pointer my-auto"> 
                      <Image
                      src='/img/logo-sm.png' 
                      layout='fill' 
                      objectFit='cover'
                      className='rounded-full'
                      /> 
                    </div>
                    <span>LA Clippers</span>
                  </div>
                  <div className="features flex space-x-20 mt-7">
                    <div className="feature">
                      <p className='font-semibold'>HEIGHT</p>
                      <h2 className='font-semibold text-xl'>6<small>ft</small>8<small>in</small></h2>
                      <p>/203m</p>
                    </div>
                    <div className="feature">
                      <p className='font-semibold'>WEIGHT</p>
                      <h2 className='font-semibold text-xl'>220<small>lbs</small></h2>
                      <p>/199.8Kg</p>
                    </div>
                  </div>
                </div>

                <div className="middle">
                  <div className="text-center flex justify-center items-center">
                    <div className="relative h-36 w-full cursor-pointer my-auto"> 
                      <Image
                      src='/img/4.png' 
                      layout='fill' 
                      objectFit='cover'
                      className=''
                      /> 
                    </div>
                    
                  </div>
                <div className="relative">
                  <div className="absolute z-50 scale-125 translate-x-1/4 -translate-y-24 h-[590px] w-[317px] cursor-pointer my-auto"> 
                    <Image
                      src='/img/paul.png' 
                      layout='fill' 
                      objectFit='cover'
                      className='absolute'
                    /> 
                  </div>
                  <h1 className='absolute -top-14 z-50 text-9xl  text-red-500 font-semibold left-6'>13</h1>
                  <div className="absolute -top-10 translate-x-18 h-[400px] w-[400px] rounded-full border-gray-200 border-2 z-40"></div>
                </div>
                </div>
                <div className="side-content">
                    <div className="flex flex-row-reverse">
                      <div>
                        <h3 className="text-md font-semibold mb-2">LAST GAME</h3>
                        <div className="game-card bg-white rounded-md p-3">
                          <h3 className="title text-md font-semibold text-center">LEAGUE PASS</h3>
                          <div className="game-teams flex space-x-8 items-center mt-4">

                            <div className="game-team flex flex-col justify-center items-center">
                              <h1 className='font-semibold text-2xl flex items-center space-x-3'>
                                <div className="relative h-12 w-12 cursor-pointer my-auto"> 
                                  <Image
                                  src='/img/logo2-sm.png'
                                  layout='fill' 
                                  objectFit='contain'
                                  className=''
                                  /> 
                                </div>
                                <p>101</p>
                              </h1>
                              <b>4-8</b>
                            </div>
                            <div className="game-team flex flex-col justify-center items-center">
                              <b>FINAL</b>
                            </div>

                            <div className="game-team flex flex-col justify-center items-center">
                              <h1 className='font-semibold text-2xl flex justify-center items-center space-x-2'>
                                <div className="relative h-10 w-10 cursor-pointer my-auto"> 
                                  <Image
                                  src='/img/logo-sm.png' 
                                  layout='fill' 
                                  objectFit='cover'
                                  className=''
                                  /> 
                                </div>
                                <p>120</p>
                              </h1>
                              <b>4-8</b>
                            </div>
                          </div>
                          <div className="text-center date flex space-x-2 items-center justify-center font-semibold">
                            <span className="ti-calendar"></span>
                            <span className='text-sm'>05/02/2020</span>
                          </div>

                          <div className="highlights mt-4 grid grid-cols-2">
                            <div className="h-card relative h-[150px] cursor-pointer " >
                              <Image
                                src='/img/1.jpg' 
                                layout='fill' 
                                objectFit='cover'
                                className=''
                              /> 
                              <div className="h-card-over absolute h-full w-full rounded-md bg-black bg-opacity-50">
                              </div>
                            </div>
                            <div className="h-card col-span-6 h-[150px] relative cursor-pointer " >
                              <Image
                                src='/img/1.jpg' 
                                layout='fill' 
                                objectFit='cover'
                                className=''
                              /> 
                              <div className="h-card-over col-span-4 rounded-lg">
                            </div>
                          </div>
                        </div>
                          
                      
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="content-2">

              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}