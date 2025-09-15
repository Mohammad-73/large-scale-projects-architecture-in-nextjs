import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType){
    return (
        <BaseIcon {...props}>
            <circle cx="3.5779" cy="3.2879" r="2.7487"/>
        </BaseIcon>
    )
} 