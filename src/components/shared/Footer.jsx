import { FaCreditCard, FaCcVisa, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {

    return (

        <footer className='p-4 bg-hobbizer-dark text-white sm:p-6 '>
            <div className='max-w-7xl mx-auto'>
                <div className='md:flex md:justify-between'>
                    <div className='mb-6 md:mb-0'>
                        <a href='#' className='flex items-center'>
                            <img src='https://hobbizer.com/bundles/hobbizerorganiser/images/logo-footer.png' className='mr-3 w-[164px] h-[60px]' alt='FlowBite Logo ' />
                        </a>
                    </div>
                    <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
                        <div>
                            <h2 className='mb-6 text-sm font-semibold uppercase '>About Hobbizer</h2>
                            <ul className='text-hobbizer-gray '>
                                <li className='mb-4'>
                                    <a href='#' className='hover:underline'>How it works</a>
                                </li>
                                <li className='mb-4'>
                                    <a href='#' className='hover:underline'>FAQ</a>
                                </li>
                                <li>
                                    <a href='https://tailwindcss.com/' className='hover:underline'>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='mb-6 text-sm font-semibold  uppercase '>Payement Secured</h2>
                            <ul className='text-hobbizer-gray  inline-flex'>
                                <li className='mb-4 mr-2'>
                                    <span href='#' className='text-3xl cursor-default'><FaCreditCard /></span>
                                </li>
                                <li>
                                    <span href='#' className='text-3xl cursor-default'><FaCcVisa /></span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='mb-6 text-sm font-semibold  uppercase '>Follow us</h2>
                            <ul className='text-hobbizer-gray  inline-flex'>
                                <li className='mb-4 mr-2'>
                                    <a href='#' className='text-3xl hover:text-hobbizer'><FaInstagram /></a>
                                </li>
                                <li>
                                    <a href='#' className='text-3xl hover:text-hobbizer'><FaFacebook /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='my-6 border-hobbizer-gray sm:mx-auto  lg:my-8' />
                <div className='sm:flex sm:items-center sm:justify-between'>
                    <span className='text-sm text-hobbizer-gray sm:text-center '>© 2022 <a href='#' className='hover:underline'>Hobbizer™</a>. All Rights Reserved.
                    </span>

                </div>
            </div>

        </footer>

    )
}

export default Footer