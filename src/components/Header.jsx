import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <>
      <div id="header" className="bg-soft-red flex flex-row justify-between rounded-xl mb-5 p-5">
        <div className="flex flex-col text-cream rounded-xl">
          <span>My balance</span>
          <span className='font-bold text-xl'>$921.48</span>
        </div>
        <div>
          <img src={logo} alt="logo"/>
        </div>
      </div>
    </>
  )
}