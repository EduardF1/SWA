import _ from "lodash";

export const FormGroupItem = ({labelType, onChange, value}) => {
    return (
        <div className="form-group">
            {labelType === "name" ? (
                <>
                    <label htmlFor={labelType}>{_.capitalize(labelType)}: </label>
                    <input type="text" name={labelType} id={labelType} onChange={onChange} value={value}/>
                </>

            ) : (
                <>
                    <label htmlFor={labelType}>{_.capitalize(labelType)}: </label>
                    <input type={labelType} name={labelType} id={labelType} onChange={onChange} value={value}/>
                </>
            )}
        </div>
    )
};
