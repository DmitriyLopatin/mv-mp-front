import { useState, useCallback, useRef } from 'react'
import { Wrapper, DropdownWrapper } from './styled'
import { useOnClickOutside } from 'helpers/hooks'


interface I_DropdownPanel {
  toggler: (props: any) => React.ReactElement
  children: React.ReactElement
  toleft?: boolean
}

const DropdownPanel: React.FC<I_DropdownPanel> = ({
  toggler,
  children,
  toleft = false,
}) => {
  const dropdownWrapperRef = useRef(null)

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = useCallback(() => {
    setIsVisible((isVisible) => !isVisible)
  }, [])

  useOnClickOutside(dropdownWrapperRef, toggleVisibility)


  const Toggler = toggler


  return (
    <Wrapper>
      <Toggler onClick={toggleVisibility} />

      {isVisible && (
        <DropdownWrapper
          ref={dropdownWrapperRef}
          toleft={toleft}
        >
          {children}
        </DropdownWrapper>
      )}
    </Wrapper>
  )
}

export default DropdownPanel