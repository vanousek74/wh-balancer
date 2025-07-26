// ==UserScript==
// @name         WH Balancer (vanousek74)
// @namespace    https://vanousek74.github.io/
// @version      1.0
// @description  Balancování surovin mezi vesnicemi s pokročilými možnostmi (výstavba, rekrut, zůstatek atd.)
// @author       vanousek74 & ChatGPT
// @match        https://*.divokekmeny.cz/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const UI = {
        settingsPanel: null,
        createPanel: function () {
            if (document.getElementById('whb-settings')) return;
            const panel = document.createElement('div');
            panel.id = 'whb-settings';
            panel.style.position = 'fixed';
            panel.style.top = '100px';
            panel.style.right = '20px';
            panel.style.background = '#fff';
            panel.style.border = '2px solid #333';
            panel.style.padding = '10px';
            panel.style.zIndex = 9999;
            panel.innerHTML = `
                <h4 style="margin-top:0">WH Balancer - Nastavení</h4>
                <label><input type="checkbox" id="filter-construction"> Filtrovat výstavbu</label><br>
                <label><input type="checkbox" id="filter-recruit"> Filtrovat rekrut</label><br>
                <label><input type="checkbox" id="prioritize-distance" checked> Prioritizovat vzdálenost</label><br><br>
                <label>Ponechat suroviny:<br>
                  <input type="radio" name="surplus" value="coin" checked> Na zlatou minci<br>
                  <input type="radio" name="surplus" value="percent"> Procentuálně <input type="number" id="percent-surplus" value="20" style="width:50px">%</label><br><br>
                <label>Skupina zdrojových vesnic: <select id="source-group"></select></label><br>
                <label>Skupina cílových vesnic: <select id="target-group"></select></label><br><br>
                <button id="whb-generate">Generovat návrhy</button>
            `;
            document.body.appendChild(panel);
            UI.settingsPanel = panel;
        },
        populateGroups: function () {
            const options = ['- Vyber -', 'Hlavní vesnice', 'Výstavba', 'Záloha']; // tyto názvy budou nahrazeny reálnými ze hry
            const srcSel = document.getElementById('source-group');
            const tgtSel = document.getElementById('target-group');
            options.forEach(opt => {
                srcSel.appendChild(new Option(opt, opt));
                tgtSel.appendChild(new Option(opt, opt));
            });
        }
    };

    function getSettings() {
        return {
            filterConstruction: document.getElementById('filter-construction').checked,
            filterRecruit: document.getElementById('filter-recruit').checked,
            prioritizeDistance: document.getElementById('prioritize-distance').checked,
            surplusMode: document.querySelector('input[name="surplus"]:checked').value,
            percentSurplus: parseInt(document.getElementById('percent-surplus').value),
            sourceGroup: document.getElementById('source-group').value,
            targetGroup: document.getElementById('target-group').value
        };
    }

    async function generateProposals() {
        const settings = getSettings();
        alert("Generuji návrhy podle nastavení:\n" + JSON.stringify(settings, null, 2));

        // Zde bude pokročilá logika přenosů (bude doplněno)
    }

    // Inicializace
    window.addEventListener('load', () => {
        UI.createPanel();
        UI.populateGroups();
        document.getElementById('whb-generate').addEventListener('click', generateProposals);
    });

})();
