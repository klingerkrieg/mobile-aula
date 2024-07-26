import {Button, Text, View} from 'react-native';
import { styles } from '../views/Estilos';

export const Title = (props) => {

    return <View>
            {/* adicionamos uma cor de fundo para o texto */}
            <Text style={[styles.title,{fontSize:props.size,
                                        backgroundColor:props.bg}]}>

                {props.children}

                {/* adicionamos um botão opcional */}
                {props.hasButton == true &&
                    <Button title="Ok" onPress={props.onPressButton} />
                }
            </Text>
            </View>
}


/* esse será o estilo padrão */
Title.defaultProps = {
    //bg:"green",
    //size:20,
    hasButton: false,
};
