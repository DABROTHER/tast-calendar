import { DropDownIcon } from "design-systems/Atoms/Icons"
import Typography from "design-systems/Atoms/Typography"
import { useState } from "react"

const DropDownTable = () => {
    const [isOpen, setrIsOpen] = useState<boolean>(false)
    return <div className="flex flex-col border-b border-[#EEF0F2]">

        <div className="grid grid-cols-8 bg-gray-200 font-semibold">
            <div className=" flex flex-row items-center gap-1 cursor-pointer" onClick={() => setrIsOpen((pre) => !pre)}>
                <DropDownIcon
                    className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in`}
                    height={8}
                    width={16}
                />
                <Typography>
                    Standard rooms
                </Typography>
            </div>
            {Array(7).fill('').map((_, i) => <div className="flex items-center justify-center flex-row border-x border-[#EEF0F2]">

                <Typography className="p-2 h-8 w-8 bg-red ">02</Typography>
            </div>)}

        </div>

        {Array(3).fill('').map((_, j) =>
            <div className={`grid grid-cols-8 bg-gray-200 font-semibold   ${isOpen ? 'h-fit opacity-100' : 'h-0 opacity-0'}`}>
                <div className="p-2">Rooms</div>
                {Array(2).fill('').map((_, i) =>
                    <div className=" border-x border-[#EEF0F2] col-span-3 w-[75%] bg-red m-4">
                        <Typography className="font-medium text-paragraph leading-[30px]">09</Typography>
                    </div>
                )}

            </div>
        )}

    </div>
}
export default DropDownTable