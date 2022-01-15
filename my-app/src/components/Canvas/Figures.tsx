import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../store/store'

const Figures = (props: Props) => {
    return (
        <>
        {
            (props.figures.arr.length > 0) ? 
                props.figures.arr.map((item, index) => <svg 
                    width="750" height="500">
                        <circle 
                            cx={props.figures.arr[index].cx}
                            cy={props.figures.arr[index].cy}
                            r={props.figures.arr[index].radius}
                            stroke="green" 
                            stroke-width="4" 
                            fill="yellow" />
                    </svg>) : undefined
        }
        </>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps & DispatchProps;

function mapStateToProps(state: RootState) {
    return {
        figures: state.figuresReducer
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Figures);

