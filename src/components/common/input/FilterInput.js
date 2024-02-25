import React, { useCallback, useEffect, useState } from "react";
import { isNull } from "../../../utils/MethodUtils";
import FilterOption from "./FilterOption";
import styles from "../../../css/filterInput.module.css";

const FilterInput = React.memo(({
    data, attributeName, placeholder,
    onChangeValue
}) => {

    const [allOptions, setAllOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [choosedOptions, setChoosedOptions] = useState(new Set());

    useEffect(() => {
        const parseData = () => {
            let key, option;

            if (isNull(attributeName)) {
                return;
            }

            const _options = data.map(item => {
                let attributes = attributeName.split(".");
                key = attributes[0];
                option = item[key];
                for (let i = 1; i < attributes.length; i++) {
                    key = attributes[i];
                    option = option[key];
                }
                return option;
            });
            setAllOptions(_options);
        }

        parseData();

    }, [data, attributeName]);

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    const onChangeOption = useCallback(option => {
        if (choosedOptions.has(option)) {
            choosedOptions.delete(option);
        } else {
            choosedOptions.add(option);
        }
        setChoosedOptions(new Set(choosedOptions));
        setInputValue('');
        onChangeValue(choosedOptions);
    }, [onChangeValue, choosedOptions]);

    return (
        <div className={styles.filterInput}>
            {/* { Result */}
            {
                [...choosedOptions].map(option =>
                    <span
                        key={`filter-result-${option}`}
                        className={styles.filterInputOption}
                    >
                        {option}
                    </span>
                )
            }

            {/* Input */}
            <input type="text"
                value={inputValue}
                placeholder={placeholder}
                onChange={handleChangeInput}
            />

            {/* Options */}
            {
                inputValue.length !== 0 &&
                <FilterOption
                    options={allOptions.filter(option => option.toLowerCase().includes(inputValue.toLowerCase()))}
                    highlightText={inputValue.toLowerCase()}
                    onChangeOption={onChangeOption}
                />
            }
        </div>
    );
});

export default FilterInput;