import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const ProjectCarousel = ({ projectName }) => {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Map project names to folder names
  const getProjectFolder = (projectName) => {
    const folderMap = {
      'Delhi Transit': 'delhitransit',
      'Delhi Transit – Smart Route Management System': 'delhitransit',
      'PawnGold': 'pawngold', 
      'PawnGold – Digital Pawn Shop Management': 'pawngold',
      'RideIt': 'rideit',
      'RideIt – MERN Stack Ride Booking Platform': 'rideit',
      'CampIndia': 'campindia',
      'CampIndia – Campground Management Web App': 'campindia',
      'Diabetic Retinopathy': 'diabeticretinopathy',
      'Diabetic Retinopathy Detection': 'diabeticretinopathy'
    }
    
    // If exact match found, use it
    if (folderMap[projectName]) {
      return folderMap[projectName]
    }
    
    // If no exact match, check if the project name contains any of the key terms
    const projectLower = projectName.toLowerCase()
    if (projectLower.includes('delhi') || projectLower.includes('transit')) return 'delhitransit'
    if (projectLower.includes('pawn') || projectLower.includes('gold')) return 'pawngold'
    if (projectLower.includes('ride') || projectLower.includes('rideit')) return 'rideit'
    if (projectLower.includes('camp') || projectLower.includes('india')) return 'campindia'
    if (projectLower.includes('diabetic') || projectLower.includes('retinopathy')) return 'diabeticretinopathy'
    
    // Final fallback - return a simple lowercase version
    return projectName.toLowerCase().replace(/[^a-z0-9]/g, '')
  }

  // Get specific image names for each project based on actual files
  const getProjectImageNames = (projectName) => {
    // Use folder name as key instead of project name
    const folderName = getProjectFolder(projectName)
    
    const imageMap = {
      'campindia': [

        'Screenshot_2025-07-27_200750_xd1t2n.png',
        'Screenshot_2025-07-27_200804_cphn4b.png',
        'Screenshot_2025-07-27_200839_wllcdg.png',
        'Screenshot_2025-07-27_202458_h2eimv.png',
        'Screenshot_2025-07-27_202514_gg0fts.png',
        'Screenshot_2025-07-27_202539_ywh2yw.png',
        'Screenshot_2025-07-27_202553_sz1pna.png'
      ],
      'delhitransit': [
        'dst-1_kgtc9x.jpg',
        'dst-2_tmqcag.jpg',
        'dst-3_cwbh3j.jpg',
        'dst-4_abwt2i.jpg',
        'dst-5_bc6onm.jpg',
        'dst-6_rvvrjq.jpg',
        'dst-7_rj3ptp.jpg',
        'dst-8_im5ue5.jpg'
      ],
      'diabeticretinopathy': [
        'Screenshot_2025-07-27_203002_w4mhux.png',
        'Screenshot_2025-07-27_202950_cp0l1f.png',
        'Screenshot_2025-07-27_203012_izlubn.png ',
        'result_image_enhanced_7_bwfmpr.jpg',
        'result_image_enhanced_8_y5dqch.jpg',
        'result_image_enhanced_9_ry5k1a.jpg',
        'result_image_enhanced_10_amupdz.jpg',
        'result_image_enhanced_11_ahf8pg.jpg',
        'result_image_enhanced_12_gvi393.jpg',
        'result_image_enhanced_13_ddi1qy.jpg',
        'result_image_enhanced_14_t5zou5.jpg',
        'result_image_enhanced_15_amzb62.jpg',
        'result_image_enhanced_16_ekgzex.jpg',
        'result_image_enhanced_17_vvpids.jpg',
        'result_image_enhanced_18_kdg1sx.jpg',
        'result_image_enhanced_19_r3yiyi.jpg',
        'result_image_enhanced_20_aglhia.jpg',
        'result_image_enhanced_21_tfuctj.jpg',
        'result_image_enhanced_22_q4gydz.jpg',
        'result_image_enhanced_23_kjhzis.jpg',
        'result_image_enhanced_24_vpnaur.jpg',
        'result_image_enhanced_26_wcexpo.jpg',
        'result_image_enhanced_30_nkvamg.jpg',
        'result_image_enhanced_31_f3fmxt.jpg',
        'result_image_enhanced_32_z8cify.jpg',
        'result_image_enhanced_33_k2xiiy.jpg',
        'result_image_enhanced_34_rruwpc.jpg',
        'result_image_enhanced_35_nf3b2n.jpg',
        'Screenshot_2025-07-27_202950_cp01lf.png',
        'Screenshot_2025-07-27_203002_w4mhux.png'
      ],
      'pawngold': [
        'f1_lupkvx.jpg',
        'f2_ayqu3g.jpg',
        'f3_fuhdrl.jpg',
        'f4_riydae.jpg',
        'f5_x6fhbx.jpg',
        'f6_phq0pt.jpg'
      ],
      'rideit': [
        'Screenshot_2025-02-20_225743_taryqc.png',
        'Screenshot_2025-02-20_225806_fcgar2.png',
        'Screenshot_2025-02-20_225846_obzfhx.png',
        'Screenshot_2025-02-20_230102_jyqsj7.png',
        'Screenshot_2025-07-27_145650_xtjs8t.png',
        'Screenshot_2025-07-27_145801_qbsnc0.png',
        'Screenshot_2025-07-27_211702_bj59aj.png',
        'Screenshot_2025-07-27_211759_yuphw7.png'
      ]
    }
    
    return imageMap[folderName] || []
  }

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true)
        const folderName = getProjectFolder(projectName)
        const basePath = `/projects/${folderName}/`
        const imageNames = getProjectImageNames(projectName)
        
        console.log(`Loading images for project: "${projectName}" from folder: ${folderName}`)
        console.log(`Base path: ${basePath}`)
        console.log(`Expected images:`, imageNames)
        
        const validImages = []
        
        // Try each specific image name
        for (const imageName of imageNames) {
          const imagePath = `${basePath}${imageName}`
          
          try {
            await new Promise((resolve, reject) => {
              const img = new Image()
              img.onload = () => {
                validImages.push(imagePath)
                console.log(`Successfully loaded: ${imagePath}`)
                resolve()
              }
              img.onerror = () => reject()
              img.src = imagePath
            })
          } catch {
            console.log(`Failed to load: ${imagePath}`)
          }
        }

        console.log(`Total images loaded for ${projectName}: ${validImages.length}`)
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
          <p>Add images to <code>/public/projects/{getProjectFolder(projectName)}/</code></p>
          <small>Supported formats: JPG, PNG, WebP, GIF</small>
        </div>
      </div>
    )
  }

  return (
    <>
      <motion.div 
        className="project-carousel"
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
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onError={(e) => {
                      // Create a simple colored rectangle as fallback
                      e.target.style.display = 'none'
                      const parent = e.target.parentElement
                      if (!parent.querySelector('.fallback-thumb')) {
                        const fallback = document.createElement('div')
                        fallback.className = 'fallback-thumb'
                        fallback.textContent = index + 1
                        fallback.style.cssText = 'width:100%;height:100%;background:#FFD700;color:#000;display:flex;align-items:center;justify-content:center;font-weight:bold;border-radius:4px;'
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
                src={images[currentIndex]}
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

export default ProjectCarousel
