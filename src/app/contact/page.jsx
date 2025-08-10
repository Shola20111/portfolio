// app/contact/page.js
import { FiMail } from 'react-icons/fi'
export default function contact() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className='flex gap-2'>
        <FiMail className="text-xl" />
        <p>Email: info@example.com</p>
      </div>
      
    </div>
  );
}
