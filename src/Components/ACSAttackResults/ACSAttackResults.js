import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import AttackResult from '../AttackResult/AttackResult';
import './ACSAttackResults.css';

export default function ACSAttackResult({ combatReports }) {
    const { t } = useTranslation();
    const [AttackResults, setAttackResults] = useState([]);
    const [AttackResultsCount, setAttackResultsCount] = useState(0);
    useEffect(() => {
        let attackResults = [];
        combatReports.forEach((report, index) => {
            if (Object.keys(report.attackers).length > 1)
                attackResults.push((
                    <AttackResult
                        combatReport={report}
                        number={index + 1}
                    />
                ))
        })
        setAttackResultsCount(attackResults.length);
        setAttackResults(attackResults);
    }, [combatReports])
    return (
        <div className={`acs-attack-result ${AttackResultsCount === 0 ? "empty": ""}`}>
            <div className="labels">
                <div>{t("ACSAttack")}</div>
                <div>{t("Metal")}</div>
                <div>{t("Crystal")}</div>
                <div>{t("Dueterium")}</div>
                <div>{t("DFMetal")}</div>
                <div>{t("DFCrystal")}</div>
                <div>{t("DFReaperMetal")}</div>
                <div>{t("DFReaperCrystal")}</div>
            </div>
            {AttackResults}
        </div>
    )
}