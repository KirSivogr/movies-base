import React, { useEffect, useRef, useState } from 'react';
import {
   Dropdown,
   DropdownItem,
   SelectBox,
   SelectLabel,
   SelectWrapper,
} from '@components/Select/styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckIcon from '@mui/icons-material/Check';

interface SelectProps {
   options: string[];
   label: string;
   onChange: (selectedOption: string) => void;
}

export const Select = ({ options, label, onChange }: SelectProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState(options[0]);
   const dropdownRef = useRef<HTMLDivElement>(null);

   const toggleDropdown = () => setIsOpen(!isOpen);

   const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      onChange(option);
      setIsOpen(false);
   };

   const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <SelectWrapper ref={dropdownRef}>
         <SelectLabel>{label}</SelectLabel>
         <SelectBox onClick={toggleDropdown}>
            {selectedOption}
            {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
         </SelectBox>
         {isOpen && (
            <Dropdown>
               {options.map((option: string, index: number) => (
                  <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
                     {option}
                     {selectedOption === option && (
                        <CheckIcon style={{ color: 'orange' }} />
                     )}
                  </DropdownItem>
               ))}
            </Dropdown>
         )}
      </SelectWrapper>
   );
};
