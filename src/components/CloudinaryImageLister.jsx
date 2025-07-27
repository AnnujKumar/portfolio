import React, { useState, useEffect } from 'react'

const CloudinaryImageLister = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Cloudinary configuration
  const CLOUDINARY_CLOUD_NAME = 'dlqmb0jce'
  const CLOUDINARY_API_KEY = '172445691937593'
  const CLOUDINARY_API_SECRET = 'sw87yIRXWxdU4FQApKwYYqskV2E'

  const fetchAllImages = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Method 1: Try using the Admin API
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image?max_results=500`,
          {
            headers: {
              'Authorization': `Basic ${btoa(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`)}`
            }
          }
        )
        
        if (response.ok) {
          const data = await response.json()
          const imageList = data.resources.map(resource => ({
            public_id: resource.public_id,
            url: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_300,h_200,q_auto,f_auto/${resource.public_id}`,
            folder: resource.public_id.includes('/') ? resource.public_id.split('/')[0] : 'root',
            filename: resource.public_id.includes('/') ? resource.public_id.split('/').pop() : resource.public_id
          }))
          setImages(imageList)
          return
        }
      } catch (apiError) {
        console.log('Admin API failed, trying alternative methods...')
      }

      // Method 2: Try common folder structures
      const folders = ['delhitransit', 'pawngold', 'rideit', 'campindia', 'Diabeticretinopathy']
      const commonNames = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        'image1', 'image2', 'image3', 'image4', 'image5',
        'screenshot1', 'screenshot2', 'screenshot3',
        'demo', 'homepage', 'main', 'dashboard', 'login',
        'app', 'web', 'mobile', 'desktop', 'interface'
      ]

      const testImages = []
      
      for (const folder of folders) {
        for (const name of commonNames) {
          const publicId = `${folder}/${name}`
          const url = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_300,h_200,q_auto,f_auto/${publicId}`
          
          try {
            await new Promise((resolve, reject) => {
              const img = new Image()
              img.onload = () => {
                testImages.push({
                  public_id: publicId,
                  url: url,
                  folder: folder,
                  filename: name
                })
                resolve()
              }
              img.onerror = () => reject()
              img.src = url
            })
          } catch {
            // Try with different extensions
            for (const ext of ['.jpg', '.png', '.jpeg', '.webp']) {
              const publicIdWithExt = `${folder}/${name}${ext}`
              const urlWithExt = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_300,h_200,q_auto,f_auto/${publicIdWithExt}`
              
              try {
                await new Promise((resolve, reject) => {
                  const img = new Image()
                  img.onload = () => {
                    testImages.push({
                      public_id: publicIdWithExt,
                      url: urlWithExt,
                      folder: folder,
                      filename: `${name}${ext}`
                    })
                    resolve()
                  }
                  img.onerror = () => reject()
                  img.src = urlWithExt
                })
                break
              } catch {
                continue
              }
            }
          }
        }
      }

      setImages(testImages)
      
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const copyImageList = () => {
    const imagesByFolder = images.reduce((acc, img) => {
      if (!acc[img.folder]) acc[img.folder] = []
      acc[img.folder].push(img.public_id)
      return acc
    }, {})

    const codeString = `// Found images in your Cloudinary:
const getProjectImages = (projectName) => {
  const projectImages = {
${Object.entries(imagesByFolder).map(([folder, imgs]) => 
  `    '${folder}': [
${imgs.map(img => `      '${img}'`).join(',\n')}
    ]`
).join(',\n')}
  }
  
  return projectImages[projectName] || []
}`

    navigator.clipboard.writeText(codeString)
    alert('Image list copied to clipboard! You can paste this into your CloudinaryCarousel component.')
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Cloudinary Image Discovery Tool</h2>
      <p>This tool will help you find all the images uploaded to your Cloudinary account.</p>
      
      <button 
        onClick={fetchAllImages}
        disabled={loading}
        style={{
          padding: '12px 24px',
          backgroundColor: '#FFD700',
          color: '#000',
          border: 'none',
          borderRadius: '6px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '20px'
        }}
      >
        {loading ? 'Scanning for images...' : 'Discover My Images'}
      </button>

      {error && (
        <div style={{ color: 'red', padding: '10px', backgroundColor: '#ffe6e6', borderRadius: '4px', marginBottom: '20px' }}>
          Error: {error}
        </div>
      )}

      {images.length > 0 && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Found {images.length} images</h3>
            <button 
              onClick={copyImageList}
              style={{
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Copy Code for Carousel
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {Object.entries(images.reduce((acc, img) => {
              if (!acc[img.folder]) acc[img.folder] = []
              acc[img.folder].push(img)
              return acc
            }, {})).map(([folder, folderImages]) => (
              <div key={folder} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                <h4 style={{ color: '#FFD700', marginBottom: '10px' }}>📁 {folder}</h4>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {folderImages.map((img, index) => (
                    <div key={index} style={{ border: '1px solid #eee', borderRadius: '4px', overflow: 'hidden' }}>
                      <img 
                        src={img.url} 
                        alt={img.filename}
                        style={{ width: '100%', height: '120px', objectFit: 'cover' }}
                      />
                      <div style={{ padding: '8px', fontSize: '12px', backgroundColor: '#f8f9fa' }}>
                        <strong>ID:</strong> {img.public_id}<br/>
                        <strong>File:</strong> {img.filename}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {loading && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #FFD700',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p>Discovering your images... This may take a moment.</p>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default CloudinaryImageLister
