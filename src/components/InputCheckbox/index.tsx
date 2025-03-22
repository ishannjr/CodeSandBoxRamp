
import classNames from "classnames"
import { useId } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const autoId = useId()
  const inputId = `RampInputCheckbox-${id ?? autoId}`

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        htmlFor={inputId}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      >
        <input
          id={inputId}
          type="checkbox"
          className="RampInputCheckbox--input"
          checked={checked}
          disabled={disabled}
          onChange={() => onChange(!checked)}
        />
       
      </label>
    </div>
  )
}
