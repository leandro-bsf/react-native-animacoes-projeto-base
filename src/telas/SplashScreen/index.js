
import {View} from "react-native";
import style from './styles';
import LottieView from 'lottie-react-native';
import splaschAluraMed from '../../assets/splash-aluramed.json'

export default function SplashScreen({navigation}){
    function AnimacaoFinalizada(){
        navigation.reset({
            index: 0,
            routes:[{name:"Onboarding" }]
        })
    }
    return (
        <View style={style.container}>
          <LottieView 
        source={splaschAluraMed} 
        loop= {false}
        autoPlay= {true}
        onAnimationFinish={AnimacaoFinalizada}
        /> 

        </View>
    )
}