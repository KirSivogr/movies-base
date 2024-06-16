import React, { useEffect, useRef, useState } from 'react';
import {
   Dropdown,
   DropdownItem,
   OptionTag,
   SelectBox,
   SelectedOptions,
   SelectLabel,
   SelectWrapper,
} from '@components/Multiselect/styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckIcon from '@mui/icons-material/Check';

interface MultiSelectProps {
   options: string[];
   onChange: (selectedOptions: string[]) => void;
}

export const MultiSelect = ({ options, onChange }: MultiSelectProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
   const dropdownRef = useRef<HTMLDivElement>(null);

   const toggleDropdown = () => setIsOpen(!isOpen);

   const handleOptionClick = (option: string) => {
      let newSelectedOptions;

      if (selectedOptions.includes(option)) {
         newSelectedOptions = selectedOptions.filter(o => o !== option);
      } else {
         newSelectedOptions = [...selectedOptions, option];
      }
      setSelectedOptions(newSelectedOptions);
      const selectedOptionsToLowerCase = newSelectedOptions.map(o => o.toLowerCase());

      onChange(selectedOptionsToLowerCase);
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
         <SelectLabel>Жанры</SelectLabel>
         <SelectBox onClick={toggleDropdown}>
            <SelectedOptions>
               {selectedOptions.length === 0
                  ? 'Все жанры'
                  : selectedOptions.map(option => (
                       <OptionTag key={option}>{option}</OptionTag>
                    ))}
            </SelectedOptions>
            {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
         </SelectBox>
         {isOpen && (
            <Dropdown>
               {options.map((option: string, index: number) => (
                  <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
                     {option}
                     {selectedOptions.includes(option) && (
                        <CheckIcon style={{ color: 'orange' }} />
                     )}
                  </DropdownItem>
               ))}
            </Dropdown>
         )}
      </SelectWrapper>
   );
};
