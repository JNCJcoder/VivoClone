import styled from 'styled-components';

export const Container = styled.ScrollView`
  flex: 1;
  background: rgb(248, 248, 248);
`;

export const PerfilContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 200px;
  background-color: #670099;
`;

export const Titulo = styled.Text`
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  font-size: 19px;
  font-weight: bold;
  color: #fff;
`;

export const ImagemAnuncio = styled.TouchableOpacity`
  margin-top: 10px;
  margin-left: 20px;
  width: 80%;
  height: 160px;
  background-color: green;
  border-radius: 6px;
`;

export const AnuncioTag = styled.Text`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: green;
`;

export const AnuncioTitulo = styled.Text`
  margin-top: 5px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const AnuncioDescription = styled.Text`
  margin-top: 10px;
  margin-left: 20px;
  max-width: 80%;
  font-size: 14px;
  font-weight: bold;
  color: grey;
`;

export const OfertasTitulo = styled.Text`
  margin-top: 70px;
  margin-left: 20px;
  max-width: 80%;
  font-size: 18px;
  font-weight: bold;
  color: grey;
`;

export const OfertasContainer = styled.ScrollView`
  flex: 1;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const Ofertas = styled.TouchableOpacity`
  background-color: #670099;
  width: 200px;
  height: 200px;
  border-color: black;
  border-radius: 6px;
  margin-left: 10px;
`;

export const AdsContainer = styled.TouchableOpacity`
  margin-top: 50px;
  margin-left: 20px;
  background-color: #670099;
  width: 89%;
  height: 130px;
  border-radius: 6px;
`;

export const FlexAds = styled.TouchableOpacity`
  flex-direction: row;
`;

export const FlexText = styled.View`
  margin-top: 20px;
  margin-left: 10px;
`;

export const ShopAds = styled.View`
  margin-top: 15px;
  margin-left: 20px;
  background-color: #670099;
  width: 30%;
  height: 100px;
  border-radius: 6px;
`;

export const NameAds = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DescriptionAds = styled.Text``;

export const ValueAds = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
export const TrialAds = styled.Text`
  color: green;
`;
