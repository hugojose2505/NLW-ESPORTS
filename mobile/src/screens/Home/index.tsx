import { useEffect, useState} from 'react';
import { Image, FlatList } from 'react-native';
import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import {SafeAreaView} from 'react-native-safe-area-context'
import { styles } from './styles';
import { GAMES } from '../../utils/games';

export function Home() {
  const [games,setGames] = useState<GameCardProps[]>([]);
  useEffect(() => {
    fetch('http://192.168.1.112:3333/games')
    .then(response => response.json())
    .then(data => setGames(data));
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source = {logoImg}
        style = {styles.logo}
      />
      <Heading
        title="Encontre seu DUO!"
        subtitle="Selecione o game que deseja JOGAR"
      />

    <FlatList
    data={games}
    keyExtractor = {item => item.id} 
    renderItem = {({item}) => (
      <GameCard
        data={item }
      />
      
    )}
    showsHorizontalScrollIndicator={false}
    horizontal
    contentContainerStyle= {styles.contentList}
    ></FlatList>
   

    </SafeAreaView>
  );
}