import { useState } from 'react'
import Image from './components/image'
import Navbar from './components/navbar'
import Card from './components/card'
function App() {

  return (
    <>

      <div className="container-fluid">
        <div className='container mt-4 d-flex'>
          <div className="container">
            {/* 
              <div class="row ">
            <Image className="p-4" src="https://www.underconsideration.com/brandnew/archives/olx_logo.png" width="100%" heigt="100%"/>
            <Image  src="http://pluspng.com/img-png/car-png-car-png-file-1766.png" width="30%" heigt="30%"/><span className='mt-4 px-3 fw-bold'>Motors</span>
            <Image  src="https://tse4.mm.bing.net/th?id=OIP.zZWGQvAOUIIGD_bxXygoZgHaFp&pid=Api&P=0&h=220" width="30%" heigt="30%"/> <span className='mt-4 px-3 fw-bold'>Property</span> 
        
            </div>  */}

          </div>



        </div>
        <Navbar />
        <div className='p-2'>
          <div className='row '>
            <h1 className='fw-bold'>Cars</h1>


            <div className="row">

              <Card src="https://tse1.mm.bing.net/th?id=OIP.z4KIjrPKa4HAu0ocz3gpLwHaEW&pid=Api&P=0&h=220" title="Farari Car 2024" description="I want to sell my car, only serious buyers contact." location="karachi, pakistan" />
              <Card src="https://tse2.mm.bing.net/th?id=OIP.roHntiwsK2sQ73ICkLPmaAHaE8&pid=Api&P=0&h=220" title="Mercedes Benz" description="I am selling my car, interested parties only." location="Lahore, pakistan" />
              <Card src="https://www.wallpapersshare.com/img/big/red-mercedes-benz-cars-ultra-hd-laptop-wallpaper.jpg" title="Mercedes Car" description="I am selling my car, please contact only if you are genuinely interested.." location="Muree, pakistan" />
              <Card src="https://wallpaperaccess.com/full/155161.jpg" title="Jaguar Car " description="I am selling my car, please contact only if you are interested in buying it." location="Islamabad, pakistan" />

            </div>

          </div>


          <div className='row'>
            <h1 className='fw-bold'>Mobile Phones</h1>


            <div className="row">

              <Card src="https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2018/02/samsung-galaxy-s9-coral-blue-back-2.jpg?itok=sOio61d8" title="Samsung Mobile" description="I want to sell my mobile phone, only serious buyers contact." location="karachi, pakistan" />
              <Card src="https://www.sammobile.com/wp-content/uploads/2021/01/Galaxy-S21-Ultra-15-1.jpg" title="Android Phone" description="I am selling my mobile phone, interested parties only." location="Lahore, pakistan" />
              <Card src="https://tse1.mm.bing.net/th?id=OIP.IjgoV-pzwF6KIzOhOCBGSwHaE7&pid=Api&P=0&h=220" title="Mobile Phone" description="I am selling my mobile phone, please contact only if you are genuinely interested." location="Faisalabad, pakistan" />
              <Card src="https://m.media-amazon.com/images/I/61UBRV27+VL._AC_SX569_.jpg" title="Galaxy 2024" description="I am selling my mobile phone, please contact only if you are interested in buying it." location="Hyderabad, pakistan" />

            </div>

          </div>



          <div className='row'>
            <h1 className='fw-bold'>Houses</h1>


            <div className="row">

              <Card src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=architecture-family-house-front-yard-106399.jpg&fm=jpg" title="Hutt Style House" description="I want to sell my house, only serious buyers contact." location="karachi, pakistan" />
              <Card src="https://www.arch2o.com/wp-content/uploads/2017/10/Arch2O-worlds-3-most-successful-public-housing-projects-16.jpg" title="House " description="I am selling my house, interested parties only." location="Lahore, pakistan" />
              <Card src="https://cdn.homedit.com/wp-content/uploads/2021/03/Investing-In-Condos-And-Townhouses.jpeg" title="Beautiful House" description="I am selling my house, please contact only if you are genuinely interested." location="Faisalabad, pakistan" />
              <Card src="https://www.3chomes.co.nz/wp-content/uploads/2020/11/shutterstock_1505613629-scaled.jpg" title="American House Sell" description="I am selling my house, please contact only if you are interested in buying it." location="Hyderabad, pakistan" />

            </div>

          </div>


        </div>

      </div>

    </>
  )
}

export default App
