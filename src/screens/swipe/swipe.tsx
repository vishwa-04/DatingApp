import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useTailwind} from 'tailwind-rn';
import {AllImages} from '@assets';
import Swiper from 'react-native-deck-swiper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackCardList} from '@types';
import {findNearestUsers, userSwipeDisLike, userSwipeLike} from '@services';
import {SwipeLoading} from '../SwipeLoading';
import {SwipeUserInfo} from '../swipeUserInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorageConst} from '@constants';

type dataProps = {
  firstname: string;
  image: any;
  id: number;
};
export const Swipe = ({
  navigation,
}: NativeStackScreenProps<RootStackCardList>) => {
  const [userInfo, setUserInfo] = useState<Array<any>>([]);
  const [loader, setLoader] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInfoScreen, setIsUserInfoScreen] = useState(false);
  const [latlogData, setLatLogData] = useState<any>(null);
  const [swiping, setSwiping] = useState<any>(null);
  const [key, setKey] = useState(0);
  const swiperRef: any = useRef(null);

  useEffect(() => {
    findUserData();
  }, []);

  const backFunction = () => {
    if (isUserInfoScreen) {
      setIsUserInfoScreen(false);
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backFunction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backFunction);
    };
  }, [isUserInfoScreen]);

  const findUserData = async () => {
    try {
      const data: any = await findNearestUsers();
      setUserInfo(data?.data?.data || []);
      const latLong: any = await AsyncStorage.getItem(
        asyncStorageConst.latLogUser,
      );
      setLatLogData(JSON.parse(latLong));
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const getDistance = () => {
    const lat1 = latlogData.lat;
    const lon1 = latlogData.lon;
    const lat2 = userInfo[currentIndex].lat;
    const lon2 = userInfo[currentIndex].lon;
    function toRad(x: number) {
      return (x * Math.PI) / 180;
    }

    var R = 6371; // Radius of the Earth in km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return `${parseInt(d)} km`;
  };

  // const DUMMY_DATA: dataProps[] = [
  //   {
  //     firstname: 'John',
  //     image:
  //       'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg',
  //     id: 1,
  //   },
  //   {
  //     firstname: 'Bronnie',
  //     image:
  //       'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     id: 2,
  //   },
  //   {
  //     firstname: 'Sania',
  //     image:
  //       'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     id: 3,
  //   },
  //   {
  //     firstname: 'Katherine',
  //     image:
  //       'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     id: 4,
  //   },
  //   {
  //     firstname: 'Anton',
  //     image:
  //       'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     id: 5,
  //   },
  // ];
  const tw = useTailwind();
  return (
    <>
      {loader ? (
        <SwipeLoading />
      ) : (
        <>
          {isUserInfoScreen ? (
            <SwipeUserInfo data={userInfo[currentIndex]} />
          ) : (
            <View
              style={tw(
                'flex-1 justify-between pb-24 px-2 pt-2 h-full bg-white',
              )}>
              <Image
                source={AllImages.LovelineText}
                style={tw('w-40 h-9 mx-auto object-cover rounded-2xl')}
              />
              <View style={tw('flex-1 h-[20%]')}>
                <Swiper
                  ref={swiperRef}
                  key={key}
                  stackSize={userInfo.length}
                  cardIndex={currentIndex}
                  horizontalSwipe={true}
                  verticalSwipe={false}
                  animateCardOpacity
                  onSwiping={(x, index) => {
                    if (x > 0) {
                      setSwiping('liked');
                    } else if (x < 0) {
                      setSwiping('disLiked');
                    }
                  }}
                  onSwiped={() => {
                    setSwiping(null);
                  }}
                  onSwipedLeft={async cardIndex => {
                    await userSwipeDisLike({
                      dislikedUserId: userInfo[currentIndex]._id,
                    });
                    setCurrentIndex(cardIndex + 1);
                    setSwiping(null);
                  }}
                  onSwipedRight={async cardIndex => {
                    await userSwipeLike({
                      likedUserId: userInfo[currentIndex]._id,
                    });
                    setCurrentIndex(cardIndex + 1);
                    setSwiping(null);
                  }}
                  containerStyle={{
                    background: 'transparent',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onSwipedAborted={() => {
                    setSwiping(null);
                    setKey(key => key + 1);
                  }}
                  cards={userInfo}
                  renderCard={(card: any, index: number) => {
                    return (
                      <>
                        {card?.profilePic && (
                          <View
                            style={tw('bg-white h-[50%] rounded-xl relative')}>
                            <Image
                              resizeMode="cover"
                              source={{uri: card.profilePic}}
                              style={tw('h-full w-full rounded-xl')}
                            />
                            {/* <div className='rot'></div>                   */}
                            {swiping && currentIndex === index && (
                              <>
                                {swiping === 'liked' ? (
                                  <View
                                    style={tw(
                                      'object-cover absolute top-[40%] right-[40%] p-5 rounded-full bg-white',
                                    )}>
                                    <Image
                                      source={AllImages.SwipeLike}
                                      style={tw('object-cover')}
                                    />
                                  </View>
                                ) : (
                                  <Image
                                    source={AllImages.SwipeDislike}
                                    style={tw(
                                      'object-cover absolute top-[40%] right-[40%]',
                                    )}
                                  />
                                )}
                              </>
                            )}
                          </View>
                        )}
                      </>
                    );
                  }}
                />
              </View>
              <View
                style={tw('flex-col justify-between gap-y-2 bg-white z-40')}>
                <View style={tw('flex-row justify-center items-center gap-14')}>
                  <TouchableOpacity
                    onPress={() => {
                      setSwiping('disLiked');
                      setTimeout(() => {
                        swiperRef.current?.swipeLeft();
                      }, 500);
                    }}>
                    <Image
                      source={AllImages.Close}
                      style={tw('object-cover')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setSwiping('liked');
                      setTimeout(() => {
                        swiperRef.current?.swipeRight();
                      }, 500);
                    }}>
                    <Image
                      source={AllImages.Heart}
                      style={tw('object-cover')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setIsUserInfoScreen(true)}>
                    <Image source={AllImages.Info} style={tw('object-cover')} />
                  </TouchableOpacity>
                </View>
                <Pressable
                  onPress={() => {
                    setIsUserInfoScreen(true);
                    // navigation.navigate('SwipeUserInfo');
                  }}>
                  <Text
                    style={tw(
                      'text-center text-[#4B164C] font-bold text-base',
                    )}>
                    {userInfo[currentIndex]?.username || ''}
                  </Text>
                </Pressable>
                <View style={tw('flex-row justify-center items-center gap-2')}>
                  <Text style={tw('text-black')}>
                    {userInfo[currentIndex]?.occupation || ''}
                  </Text>
                  {latlogData && (
                    <View
                      style={tw('flex-row justify-start gap-1 items-center')}>
                      <Image
                        source={AllImages.Location}
                        style={tw('object-cover')}
                      />
                      <Text style={tw('text-black')}>{getDistance()}</Text>
                    </View>
                  )}
                </View>
                <Text style={tw('text-center font-normal text-sm text-black')}>
                  {userInfo[currentIndex]?.aboutMe || ''}
                </Text>
              </View>
            </View>
          )}
        </>
      )}
    </>
  );
};
