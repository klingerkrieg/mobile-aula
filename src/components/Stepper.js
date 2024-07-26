import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export function Stepper(props) {

  const [value, setValue] = useState(0);

  const increase = () => setValue((value) => value + props.step);

  const decrease = () => setValue((value) => value - props.step);

  return (
    <View style={styles.container}>
      <Pressable onPress={increase} style={styles.block}>
        Aumentar
      </Pressable>

      <View style={styles.block}>{value}</View>

      <Pressable onPress={decrease} style={styles.block}>
        Diminuir
      </Pressable>
    </View>
  );
}

/* esse será o estilo padrão */
Stepper.defaultProps = {
    step:1
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
    margin: 16,
  },

  block: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 48,

    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#aaa",
  },
});