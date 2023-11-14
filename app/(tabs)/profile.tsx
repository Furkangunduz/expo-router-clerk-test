import { View, Text, Button } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

const profile = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Button
        title="Log Out"
        onPress={() => {
          signOut();
        }}
      ></Button>

      {!isSignedIn && (
        <Link href={'/(modals)/login'}>
          <Text>Login</Text>
        </Link>
      )}
    </View>
  );
};

export default profile;
