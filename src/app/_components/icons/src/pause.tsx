import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType){
    return (
        <BaseIcon {...props}>
            <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/>
        </BaseIcon>
    )
} 