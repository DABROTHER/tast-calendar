import { DropDownIcon, IconLeftArrow, IconRightArrow } from "design-systems/Atoms/Icons"
import Typography from "design-systems/Atoms/Typography"
import { STATUS } from "./utils"
import DropDown from "design-systems/Molecules/DropDown"
import { useState } from "react"
import DropDownTable from "design-systems/Molecules/DropDownTable"

const FrontDeskTemplate = () => {
    const [isOpen, setrIsOpen] = useState<boolean>(false)


    return (<div className="p-4 rounded-sm w-full">
        <div className="flex flex-row gap-8 items-center">
            <div className="flex flex-row gap-4 items-center">
                <Typography> Today</Typography>
                <IconLeftArrow />
                <IconRightArrow />
                <Typography> need to work</Typography>
            </div>
            <div className="flex flex-row gap-4 items-center">
                {STATUS.map(({ color, value }, i) => (
                    <div key={i} className="flex flex-row items-center gap-2">
                        <div className={`flex bg-[${color}] h-4 w-4`}></div>
                        <Typography className="font-medium">{value}</Typography>
                    </div>
                ))}

            </div>
        </div>
        <div className="flex flex-col">
            <div className="grid grid-cols-8 bg-gray-200 font-semibold">
                <div className="p-2">Rooms</div>
                {Array(7).fill('').map((_, i) => <div className="flex flex-col border border-[#EEF0F2]">
                    <Typography className="font-medium text-paragraph leading-[30px]">09</Typography>
                    <Typography className="font-medium text-md leading-[21px]">Friday</Typography>

                </div>)}

            </div>
            {
                Array(3).fill('').map((_, i) => <DropDownTable />)
            }


        </div>


    </div>)
}
export default FrontDeskTemplate