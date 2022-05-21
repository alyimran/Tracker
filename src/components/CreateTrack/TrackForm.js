import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "../Spacer";
import { Context as LocationContext } from "../../context/LocationContext";
import useSafeTrack from "../../hooks/useSafeTrack";

const TrackForm = () => {
	const {
		state: { recording, name, locations },
		startRecording,
		stopRecording,
		changeName,
	} = useContext(LocationContext);

    const [saveTrack] = useSafeTrack()

	//console.log(locations.length);
	return (
		<>
			<Spacer>
				<Input
					value={name}
					onChangeText={(text) => {
						changeName(text);
					}}
					placeholder="Enter the name"
				/>
			</Spacer>
			<Spacer>
				{!recording ? (
					<Button title="Start Recording" onPress={startRecording} />
				) : (
					<Button title="Stop" onPress={stopRecording} />
				)}
			</Spacer>
			<Spacer>
				{!recording && locations.length ? (
					<Button title="Save Recording" onPress={saveTrack} />
				) : null}
			</Spacer>
		</>
	);
};

export default TrackForm;

const styles = StyleSheet.create({});
