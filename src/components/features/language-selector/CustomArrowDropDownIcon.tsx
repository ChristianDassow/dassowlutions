import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SvgIconProps } from '@mui/material/SvgIcon';

const CustomArrowDropDownIcon = (props: SvgIconProps) => {
  return <ArrowDropDownIcon {...props} style={{ color: '#fff' }} />; // Change the color here
};

export default CustomArrowDropDownIcon;
