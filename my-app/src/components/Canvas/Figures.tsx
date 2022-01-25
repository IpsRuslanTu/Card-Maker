import { connect } from 'react-redux'
import { RootState } from '../../store/store'
import Circle from './Circle'
import Heart from './Heart'
import Star from './Star'

const Figures = (props: Props) => {
    
    return (
        <>
            {
                (props.figures.arr.length > 0) ?
                    props.figures.arr.map((item, index) => {
                        switch (item.name) {
                            case 'circle':
                                return <Circle key={index}
                                    posX={props.figures.arr[index].x}
                                    posY={props.figures.arr[index].y}
                                    index={index}
                                // width={props.figures.arr[index].width}
                                />
                            case 'heart':
                                return <Heart key={index}
                                    posX={props.figures.arr[index].x}
                                    posY={props.figures.arr[index].y}
                                    index={index} />
                            case 'star':
                                return <Star key={index}
                                    posX={props.figures.arr[index].x}
                                    posY={props.figures.arr[index].y}
                                    index={index} />
                        }
                    })
                    : undefined
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

