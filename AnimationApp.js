import React from 'react';
import {Animated , View , Text} from 'react-native';


class FadeIn extends React.Component {
    state = {
      fadeAnim: new Animated.Value(1),  
    }
  
    componentDidMount() {
      Animated.timing(                 
        this.state.fadeAnim,           
        {
          toValue: 0,                   
          duration: 3000,            
        }
      ).start();                        
    }
  
    render() {
      let { fadeAnim } = this.state;
  
      return (
        <Animated.View                
          style={{
            ...this.props.style,
            opacity: fadeAnim,         
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
  }
export default class Anim extends React.Component
{
    render()
    {
     return(
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
             <fadeIn style={{flex:1,backgroundColor:'yellow',width:80,height:80}}>
             <Text style={{fontSize:20,textAlign:'center',color:'black'}}>Fade In</Text>
             </fadeIn>
             </View>
           )
}
}
