import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const CloudinaryCarousel = ({ projectName }) => {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Cloudinary configuration
  const CLOUDINARY_CLOUD_NAME = 'dlqmb0jce'
  
  // Map project names to their actual Cloudinary image URLs
  const getProjectImages = (projectName) => {
    const projectImages = {
      'Delhi Transit': [
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/delhitransit/dst-1_kgtc9x.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/delhitransit/dst-2_tmqcag.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/delhitransit/dst-3_cwbh3j.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/delhitransit/dst-4_abwt2i.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/delhitransit/dst-5_bc6onm.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/delhitransit/dst-6_rvvrjq.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/delhitransit/dst-7_rj3ptp.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/delhitransit/dst-8_im5ue5.png'
      ],
      'PawnGold': [
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/pawngold/f1_lupkvx.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/pawngold/f6_phg0pt.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/pawngold/f5_x6fhbx.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/pawngold/f2_ayqu3g.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/pawngold/f3_fuhdrl.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/pawngold/f4_rlydae.png'
      ],
      'RideIt': [
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/rideit/Screenshot_2025-02-20_230102_iyqsj7.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/rideit/Screenshot_2025-02-20_225806_fcgar2.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/rideit/Screenshot_2025-07-27_211702_bj59aj.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/rideit/Screenshot_2025-02-20_225743_taryqc.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/rideit/Screenshot_2025-07-27_145801_qbsnc0.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/rideit/Screenshot_2025-07-27_211759_yuphw7.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/rideit/Screenshot_2025-07-27_145650_xtjs8t.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1737991139/portfolio/rideit/Screenshot_2025-02-20_225846_obzfhx.png'
      ],
      'CampIndia': [
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1753628312/Screenshot_2025-07-27_202539_ywh2yw.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1753628303/Screenshot_2025-07-27_202514_gg0fts.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1753628289/Screenshot_2025-07-27_202553_sz1pna.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1753628274/Screenshot_2025-07-27_202458_h2eimv.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1753628263/Screenshot_2025-07-27_200839_wllcdg.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1753628255/Screenshot_2025-07-27_200804_cphn4b.png',
        'https://res.cloudinary.com/dlqmb0jce/image/upload/v1753628255/Screenshot_2025-07-27_200750_xd1t2n.png'
      ],
      'Diabetic Retinopathy': [
        // Placeholder - awaiting actual Cloudinary URLs
      ]
    }
    
    return projectImages[projectName] || []
  }

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true)
        const imageUrls = getProjectImages(projectName)
        
        if (imageUrls.length === 0) {
          setImages([])
          setLoading(false)
          return
        }

        // Test each image URL to see if it exists
        const validImages = []
        for (const url of imageUrls) {
          try {
            await new Promise((resolve, reject) => {
              const img = new Image()
              img.onload = () => resolve(url)
              img.onerror = () => reject()
              img.src = url
            })
            validImages.push(url)
          } catch {
            console.log(`Image not found: ${url}`)
          }
        }

        setImages(validImages)
      } catch (error) {
        console.error('Error loading images:', error)
        setImages([])
      } finally {
        setLoading(false)
      }
    }

    if (projectName) {
      loadImages()
    }
  }, [projectName])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index) => {
    setCurrentIndex(index)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (loading) {
    return (
      <div className="carousel-loading">
        <div className="loading-placeholder">
          <div className="loading-animation"></div>
          <p>Loading project images...</p>
        </div>
      </div>
    )
  }

  if (!images.length) {
    return (
      <div className="carousel-no-images">
        <div className="no-images-placeholder">
          <h3>{projectName}</h3>
          <p>Project images are being prepared...</p>
          <small>Expected images: {getProjectImages(projectName).length} images configured</small>
        </div>
      </div>
    )
  }

  return (
    <>
      <motion.div 
        className="cloudinary-carousel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="carousel-container">
          {/* Main Image Display */}
          <div className="carousel-main-image">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${projectName} screenshot ${currentIndex + 1}`}
              className="main-image"
              onClick={openModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              onError={(e) => {
                console.log(`Failed to load: ${e.target.src}`)
                e.target.style.display = 'none'
              }}
            />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button className="carousel-nav prev" onClick={prevImage}>
                  <ChevronLeft size={24} />
                </button>
                <button className="carousel-nav next" onClick={nextImage}>
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="image-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="carousel-thumbnails">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image.replace('/upload/', '/upload/c_fill,w_120,h_80,q_auto,f_auto/')}
                    alt={`Thumbnail ${index + 1}`}
                    onError={(e) => {
                      // Create a simple colored rectangle as fallback
                      e.target.style.display = 'none'
                      const parent = e.target.parentElement
                      if (!parent.querySelector('.fallback-thumb')) {
                        const fallback = document.createElement('div')
                        fallback.className = 'fallback-thumb'
                        fallback.textContent = index + 1
                        fallback.style.cssText = 'width:100%;height:100%;background:#FFD700;color:#000;display:flex;align-items:center;justify-content:center;font-weight:bold;'
                        parent.appendChild(fallback)
                      }
                    }}
                  />
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Modal for Full-Size Image */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="carousel-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              <img
                src={images[currentIndex].replace('/upload/', '/upload/c_fill,w_1200,h_800,q_auto,f_auto/')}
                alt={`${projectName} full size`}
                className="modal-image"
              />
              <div className="modal-nav">
                {images.length > 1 && (
                  <>
                    <button className="modal-nav-btn prev" onClick={prevImage}>
                      <ChevronLeft size={32} />
                    </button>
                    <button className="modal-nav-btn next" onClick={nextImage}>
                      <ChevronRight size={32} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CloudinaryCarousel
