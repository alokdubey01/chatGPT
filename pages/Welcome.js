import { View, Text } from 'react-native'
import React from 'react'
import ViewPager from '@react-native-community/viewpager';
import Page from '../components/Page';
import Footer from '../components/Footer';
import { Box, Stack } from '@react-native-material/core';

export default function Welcome() {
    const pagerRef = React.useRef(null);

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#11181e' }}>
      <ViewPager style={{ flex: 1 }}>
        <View key="1">
          <Page
            backgroundColor="#11181e"
            iconName="sun"
            title="Welcome to the weather app"
          />
          <Box style={{backgroundColor: '#111', height: 240}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>Ask the <Text style={{color: 'blue'}}>Bot Anything</Text>, he's always ready to help!</Text>
          </Box>
          <Box style={{flexDirection: 'row', gap: 10, marginLeft: 20}}>
          <Stack style={{height: 20, width: 5, backgroundColor: 'white', borderRadius: 50}} />
          <Stack style={{height: 20, width: 5, backgroundColor: 'gray', borderRadius: 50}} />
          <Stack style={{height: 20, width: 5, backgroundColor: 'gray', borderRadius: 50}} />
            </Box>
          <Footer
            backgroundColor="#11181e"
            rightButtonLabel="Next"
            rightButtonPress={() => {
                handlePageChange(1)
              }}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#11181e"
            iconName="cloud-drizzle"
            title="Get updates on weather"
          />
          <Box style={{backgroundColor: '#111', height: 240}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>Ask the <Text style={{color: 'blue'}}>Bot Anything</Text>, he's always ready to help!</Text>
          </Box>
          <Box style={{flexDirection: 'row', gap: 10, marginLeft: 20}}>
          <Stack style={{height: 20, width: 5, backgroundColor: 'gray', borderRadius: 50}} />
          <Stack style={{height: 20, width: 5, backgroundColor: 'white', borderRadius: 50}} />
          <Stack style={{height: 20, width: 5, backgroundColor: 'gray', borderRadius: 50}} />
            </Box>
          <Footer
            backgroundColor="#11181e"
            rightButtonLabel="Next"
            rightButtonPress={() => true}
          />
        </View>
        <View key="3">
          <Page
            backgroundColor="#11181e"
            iconName="cloud-drizzle"
            title="Get updates on weather"
          />
          <Box style={{backgroundColor: '#111', height: 240}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>Ask the <Text style={{color: 'blue'}}>Bot Anything</Text>, he's always ready to help!</Text>
          </Box>
          <Box style={{flexDirection: 'row', gap: 10, marginLeft: 20}}>
          <Stack style={{height: 20, width: 5, backgroundColor: 'gray', borderRadius: 50}} />
          <Stack style={{height: 20, width: 5, backgroundColor: 'gray', borderRadius: 50}} />
          <Stack style={{height: 20, width: 5, backgroundColor: 'white', borderRadius: 50}} />
            </Box>
          <Footer
            backgroundColor="#11181e"
            rightButtonLabel="Next"
            rightButtonPress={() => true}
          />
        </View>
      </ViewPager>
    </View>
  )
}