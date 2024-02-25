import React from "react";
import styles from "../../../css/filterInput.module.css";

const FilterOption = React.memo(({
    options, highlightText,
    onChangeOption
}) => {

    // refer: https://stackoverflow.com/questions/30599425/javascript-how-to-add-bold-strong-effect-to-certain-words-in-a-given-string
    const getHighlightOptionText = (option) => {
        return option.replaceAll(new RegExp(`(${highlightText})`, 'ig'), `<b>$1</b>`)
    }

    return (
        <>
            {
                options.map(option =>
                    <span
                        key={`filter-option-${option}`}
                        className={styles.filterInputOption}
                        dangerouslySetInnerHTML={{ __html: `${getHighlightOptionText(option)}` }}
                        onClick={() => onChangeOption(option)}
                    />
                )
            }
        </>
    );
});

export default FilterOption;

