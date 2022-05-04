import { format } from 'date-fns'
import { useContext, useEffect, useLayoutEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ReactPaginate from "react-paginate"
import programmeContext from "../../context/programme-context"
import DayContainer from "./DayContainer"
import './ProgrammeContainer.css'

const Programme = () => {
    const programmeCtx = useContext(programmeContext)
    const startDate = format(new Date(programmeCtx.startDate), 'd MMM, yyyy')
    const endDate = format(new Date(programmeCtx.endDate), 'd MMM, yyyy')
    const days = programmeCtx.datesInterval
    const [pageNumber, setPageNumber] = useState(0)
    const [daysPerPage, setDaysperPage] = useState(4)
    const pagesVisited = pageNumber * daysPerPage
    const diplayDays = days.slice(pagesVisited, pagesVisited + daysPerPage).map(day => {
        return <DayContainer key={day} day={day} />
    })
    const [pageCount, setPageCount] = useState(Math.ceil(days.length / daysPerPage))
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    useEffect(() => {
        setDaysperPage(changeLayout())
        setPageNumber(0)
        setPageCount(Math.ceil(days.length / daysPerPage))
    }, [days])

    const changeLayout = () => {
        if (screenWidth > 1170) {
            setDaysperPage(4)
            setPageNumber(0)
            setPageCount(Math.ceil(days.length / daysPerPage))
            return 4
        } else if (screenWidth > 767) {
            setDaysperPage(3)
            setPageNumber(0)
            setPageCount(Math.ceil(days.length / daysPerPage))
            return 3
        } else if (screenWidth < 767) {
            setDaysperPage(2)
            setPageNumber(0)
            setPageCount(Math.ceil(days.length / daysPerPage))
            return 2
        }
    }

    useEffect(() => {
        changeLayout()
    }, [screenWidth])

    return (
        <div className='mt-36 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-medium text-gray-700 mb-2 text-center'>Votre programme du <span className='text-hobbizer'>{startDate}</span> au <span className='text-hobbizer'>{endDate}</span></h2>
            <p className='text-gray-500 mb-8 text-center'>Cliquez sur une période de la journée et sélectionnez vos activités</p>
            <div className='w-full sm:w-auto relative'>
                <ReactPaginate
                    previousLabel={<FaChevronLeft className='text-hobbizer text-xl' />}
                    nextLabel={<FaChevronRight className='text-hobbizer text-xl' />}
                    pageCount={pageCount}
                    onPageChange={({ selected }) => setPageNumber(selected)}
                    containerClassName={"pagination"}
                    disabledClassName={"disabled"}
                    forcePage={pageNumber}
                />
                <div className='flex'>
                    {diplayDays}
                </div>
            </div>
        </div>
    )

}

export default Programme