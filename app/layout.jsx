import '@styles/globals.css';

import Filter from '@components/Filter'

export const metadata = {
  title: "MyJob",
  description: 'Discover Jobs'
}

const RootLayout = ({ children }) => {
return(
    <html lang="en">
      <body>
        
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            {children}
          </main> 
      
      </body>
    </html>
)
}

export default RootLayout;