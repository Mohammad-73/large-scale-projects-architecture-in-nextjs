import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType){
    return (
        <BaseIcon {...props}>
            <path d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </BaseIcon>
    )
} 