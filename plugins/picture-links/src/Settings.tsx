import { ReactNative as RN } from "@vendetta/metro/common";
import { showToast } from "@vendetta/ui/toasts";
import { BetterTableRowGroup } from "$/components/BetterTableRow";
import { useProxy } from "$/stuff/hooks";
import { storage } from "..";

export default () => {
    useProxy(storage);

    return (
        <RN.ScrollView>
            <BetterTableRowGroup title="Settings">
                {
                    [
                        {
                            label: "Enable Guild Icon Preview",
                            key: "guildIconPreview",
                        },
                        {
                            label: "Download as .png/.jpeg instead of .bin",
                            key: "useDirectImageExtension",
                        }
                    ].map(({ label, key }) => ({
                        label,
                        onPress: () => {
                            storage[key] = !storage[key];
                            showToast(`${label} ${storage[key] ? "enabled" : "disabled"}`);
                        },
                        trailing: <BetterTableRowGroup.Switch value={storage[key]} onValueChange={v => (storage[key] = v)} />
                    }))
                }
            </BetterTableRowGroup>
        </RN.ScrollView>
    );
};