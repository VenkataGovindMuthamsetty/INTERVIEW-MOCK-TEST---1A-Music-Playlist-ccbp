import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`

export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 42px;
  font-weight: bold;
`

export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
`

export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`

export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  padding: 4px 6px;
  width: 40%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
  @media screen and (min-width: 992px) {
    width: 20%;
  }
`

export const SearchInput = styled.input`
  height: 30px;
  width: 90%;
  padding-left: 15px;
  color: #cbd5e1;
  border: none;
  background-color: transparent;
  outline: none;
  margin-right: 5px;
`

export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`
