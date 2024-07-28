import styled from "styled-components";
export type DropdownOption = {value: string, label: string, id: string | number};

type DropdownProps = {
    options: DropdownOption[],
    onChange: (value: string) => void,
    value?: string;
};

const DropdownStyled = styled.select`
    height: 2rem;
    border-radius: 0.5rem;
    border-color: blue;
    padding: 0 1rem;
`;
const Dropdown = (props: DropdownProps) => {
    return <DropdownStyled value={props.value}  onChange={(e) => {props.onChange(e.target.value)}}>
        <option value={null}>Choose a currency</option>
        {props.options.map((item) => {
            return (<option key={item.value} value={item.value}>
                {item.label}
            </option>)
        })}
    </DropdownStyled>
}
export default Dropdown;