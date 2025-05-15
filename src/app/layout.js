import { Lexend } from 'next/font/google';
import './globals.css';
import './globalicons.css';
import Navbar from '../componenets/Navbar';

const lexend = Lexend({
  subsets: ['latin'], weight : ['400', '500', '600'],
});

export const metadata = {
  title: "FiJoKa",
  description: "Recipe app",
};
export default function RootLayout({ children }) {
    return (
        <html lang="en" className='scroll-smooth'>    
          <body className={`${lexend.className} antialiased leading-8 overflow-x-hidden`}>
              <Navbar />  
              {children}
          </body>
        </html>
      
    );
  }

