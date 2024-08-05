import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link'


export default function Home() {
  return (
    <main className='flex flex-col  bg-slate-300'>
      <Navbar />
      <div className='flex flex-row justify-center items-center gap-10 mt-6 '>
        <Link  className=" border bg-black text-white rounded-full gap-3 py-5  w-[170px] text-sm hover:bg-green-600  px-5 " href="/products">Go To Product List</Link>
        <Link className=" border bg-black text-white rounded-full gap-3 py-5 text-sm hover:bg-green-600 w-[170px] px-5"  href="/books">Go To Books List</Link>
        <Link className=" border bg-black text-white rounded-full gap-3 py-5 text-sm hover:bg-green-600 w-[170px] px-5"  href="/category">Go To Category List</Link>
        </div>
        
      <div className='h-[75vh] py-4'>
        <h1 className='text-3xl font-bold font-mono h-[100%] flex justify-center items-center text-black'>
          Welcome to Main Application
        </h1>
        

      </div>
      <Footer />
    </main>
  );
}